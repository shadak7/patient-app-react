import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = (props) => {
const {data,ageRange} = props;

    return (
        <>
        <TableHead />
        <TableBody data={data} ageRange={ageRange}/>
        </>
    )
}

export default Table;