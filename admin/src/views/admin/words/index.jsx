// Chakra imports
import {Box} from "@chakra-ui/react";

import ComplexTable from "views/admin/words/components/ComplexTable";

import {
    columnsDataComplex,
} from "views/admin/words/variables/columnsData";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
import React, {useEffect} from "react";
import axios from "axios";

export default function Words() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);


    useEffect(() => {
        axios.get("http://ec2-50-19-171-227.compute-1.amazonaws.com:3000/word", {
            headers: {
                // 'Authorization': 'Bearer ' + localStorage.getItem("token")
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJndWxlbmRhbSIsImVtYWlsIjoiZ3VsZW5kYW0uaXNpa0ByYXN0bW9iaWxlLmNvbSIsImlhdCI6MTY3NDU5MjE2NSwiZXhwIjoxNjc0NTk1NzY1fQ.16WgvHrbFcAqJYkudDO2sJSqZvjPMRaCwwp582yB7EE'
            }
        }).then((response) => {

            const tempData = response.data.data.map((word) => {
                return {
                    id: word.id,
                    word: word.word,
                    mean: word.mean,
                    category_id: word.category_id,
                    sentence_source: word.sentence_source,
                    sentence_target: word.sentence_target,
                    usage_video_url: word.usage_video_url,
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
