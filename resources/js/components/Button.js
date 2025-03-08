
export default function Butto({props}){
   const performAction = () => props.btnAction;

    return (
        <>
        <button className="btn" onClick={performAction}>-</button>
        </>
    );

}
