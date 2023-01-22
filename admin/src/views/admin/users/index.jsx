// Chakra imports
import {Box} from "@chakra-ui/react";

import ComplexTable from "views/admin/users/components/ComplexTable";

import {
    columnsDataComplex,
} from "views/admin/users/variables/columnsData";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
import React, {useEffect} from "react";
import axios from "axios";

export default function Users() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);


    useEffect(() => {
        axios.get("http://ec2-50-19-171-227.compute-1.amazonaws.com:3000/user/get-all", {
            headers: {
                // 'Authorization': 'Bearer ' + localStorage.getItem("token")
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJndWxlbmRhbSIsImVtYWlsIjoiZ3VsZW5kYW0uaXNpa0ByYXN0bW9iaWxlLmNvbSIsImlhdCI6MTY3NDMzNDkwNSwiZXhwIjoxNjc0MzM4NTA1fQ.Jf88T56zVIIF4AdgbOM2XFim7pUAzoZ9ldWpjRM3hWQ'
            }
        }).then((response) => {

            const tempData = response.data.data.map((user) => {
                return {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    created: user.createdAt,
                    username: user.username,
                }
            });

            setData(tempData);
            setLoading(false);
            }).catch((error) => {
                setError(error);
                setLoading(false);
            }
        );

    }, []);

    // Chakra Color Mode
    return (

        <Box pt={{base: "130px", md: "80px", xl: "80px"}}>
            {
                loading ? <div>Loading...</div> : <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={data}
                />
            }


        </Box>
    );
}
