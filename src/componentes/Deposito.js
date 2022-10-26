import React, { useState } from "react";
import { usePath } from "./PathContext";
// eslint-disable-next-line
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const Deposito = (props) => {

  const pathLocal = usePath();

    const {depositoB, indexB, depositosGuardadosB, setdepositosGuardadosB} = props;

    const [isDisabled, setIsDisabled] = useState(true);

    const handleFormChange = (index, event) => {
        let data = [...depositosGuardadosB];
        data[index][event.target.name] = event.target.value;
        setdepositosGuardadosB(data);
     };

    const removeFields = async (index) => {
        let data = [...depositosGuardadosB];
            const idDelete = data[index].depositoId;
            await fetch(`${pathLocal}deposito/delete/${idDelete}`, {
                method: 'DELETE'
            });
            data.splice(index, 1)
            setdepositosGuardadosB(data)
    };

     const patchField = async (index) => {
        const data = [...depositosGuardadosB];
        const fieldToPatch = data[index];
        const fieldToPatchId = fieldToPatch.depositoId;
        if (!isDisabled) {
            try {
                const pachtRequest = await fetch(`${pathLocal}deposito/update/${fieldToPatchId}`, {
                  method: 'PUT',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(fieldToPatch)
                });
                if (pachtRequest.ok) {
                  const json = await pachtRequest.json();
                  console.log(json);
                  setIsDisabled(!isDisabled);
                }
                else {
                  // eslint-disable-next-line
                  throw 'error al momento de actualizar, favor revise conexion'
                }
                
              } catch (error) {
                alert(error);
              }
        } else {
            setIsDisabled(!isDisabled);
        }
      };

    return (
        <div className="d-flex" key={depositoB.id}>
         <table className="tt">
             <tbody>
                 <tr>
                     <td className="td-d"> <input name="codigo" type="number" disabled={isDisabled} value={depositoB.codigo} onChange={(event)=> handleFormChange(indexB, event)} className="deposito-input"/> </td>
                     <td className="td-d"> <input name="monto" type="number"  disabled={isDisabled} value={depositoB.monto} onChange={(event)=> handleFormChange(indexB, event)} className="deposito-input"/> </td>
                     <td className="td-d"> <input name="descripcion" type="text"  disabled={isDisabled} value={depositoB.descripcion} onChange={(event)=> handleFormChange(indexB, event)} className="deposito-input"/> </td>
                 </tr>
             </tbody>
         </table>
             {/* Estos fields de abajo se llenaran con info proveniente de los props */}
             {/* <input name="fk_envasadora" className="deposito-input" hidden value={fk_env}/>
             <input name="fk_banco" className="deposito-input" hidden value={fk_bank}/>
             <input name="fk_usuario" className="deposito-input" hidden value={fk_user}/> */}
             <div className="input-btn-cont d-flex">
                 <button type="button" className="delete-field-btn" onClick={()=>{removeFields(indexB)}}><RiDeleteBin2Line size={22}  color="rgb(172, 0, 0)" /></button>
                 <button type="button" className="crear-field-btn" onClick={()=>{patchField(indexB)}}><FiEdit size={20} color="green" /></button>
             </div>
        </div>
     )
};