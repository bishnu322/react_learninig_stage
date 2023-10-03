import React from 'react';
import Table from 'react-bootstrap/Table';

function NestedArray() {
    const students = [
        {
            name: "Bishnu",
            email: 'bishnu@13.com',
            address: [
                {
                    Country: "Nepal",
                    Village: "Betkuiya",
                    VDC: 'Sammarimai'
                }
            ]
        },
        {
            name: "Gautam",
            email: 'gautam@1453.com',
            address: [
                {
                    Country: "India",
                    Village: "Siddharthnagar",
                    VDC: 'Sunauli'
                }
            ]
        },
        {
            name: "Laljee",
            email: 'laljee@1093.com',
            address: [
                {
                    Country: "Nepal",
                    Village: "Bagauli",
                    VDC: 'Sammarimai'
                }
            ]
        },
        {
            name: "Lavkush",
            email: 'lavkush@10993.com',
            address: [
                {
                    Country: "USA",
                    Village: "California",
                    VDC: 'LosAngel'
                }

            ]
        },
        {
            name: "GhanShyam",
            email: 'GhanShyam@18893.com',
            address: [
                {
                    Country: "China",
                    Village: "Huu Young",
                    VDC: 'Yunono'
                }
            ]
        }
    ]
    return (
        <>
            <h1>Using Nested Map</h1>
            <Table variant='dark' striped bordered hover>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>E-mail</td>
                        <td>Address</td>
                    </tr>

                    {
                        students.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table variant='dark' striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>Country</td>
                                                <td>Village</td>
                                                <td>VDC</td>
                                            </tr>
                                            {
                                                item.address.map((data, i) =>
                                                    <tr key={i}>
                                                        <td>{data.Country}</td>
                                                        <td>{data.Village}</td>
                                                        <td>{data.VDC}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}
export default NestedArray;
