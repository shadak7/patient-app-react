const TableBody = (props) => {
    const { data,ageRange } = props;

    const currentYear = new Date().getFullYear();
    const birthYearStart = currentYear - ageRange[1];
    const birthYearEnd = currentYear - ageRange[0];

    const filteredData = data && data.filter(date => {
        if(date?.resource?.birthDate){
            const birthYear = new Date(`${date?.resource?.birthDate}`)?.getFullYear();
        return birthYear >= birthYearStart && birthYear <= birthYearEnd;
        }
    });
    
    return (
        <tbody>
            {filteredData && filteredData.map((item) => (
            <tr key={item.resource.id}>
            <td>{item?.resource?.id}</td>
            <td>{item?.resource?.name?.[0]?.given?.[0]}</td>
            <td>{item?.resource?.gender}</td>
            <td>{item?.resource?.birthDate}</td>
            <td>{item?.resource?.address?.[0]?.line?.[0]}</td>
            <td>{item?.resource?.telecom?.[0]?.value}</td>
        </tr>
          ))}
        </tbody>
    )
}

export default TableBody;