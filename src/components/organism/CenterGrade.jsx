import TableGrade from "../molecules/TableGrade";
import FormGrade from "../molecules/FormGrade";
function CenterGrade() {
    return (
        <>
            <div className="w-full flex-col h-fit">
                <TableGrade />
                <FormGrade/>

            </div>
        </>
    );
}

export default CenterGrade;