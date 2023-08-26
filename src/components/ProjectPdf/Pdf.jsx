import React from 'react'

const Pdf = ({data}) => {
  return (
    <div className='container p-4 flex justify-center items-center'>
    <div className='bg-white p-4 rounded-md' >
    <table border="1" align="center" cellpadding="10px">
        <thead>
            <tr>
                <th rowspan="3">Day</th>
                <th colspan="3">Seminar</th>
            </tr>
            <tr>
                <th colspan="2">Schedule</th>
                <th rowspan="2" colspan="2">Topic</th>
            </tr>
            <tr>
                <th>Begin</th>
                <th>End</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td rowspan="2">{data.nombre}</td>
                <td rowspan="2">8 am</td>
                <td rowspan="2">5 pm</td>
                <td>Introduction to XML</td>
            </tr>
            <tr><td>Validity: DTD and Relax NG</td></tr>
            <tr>
                <td rowspan="4">Tuesday</td>
                <td>8 am</td>
                <td>11 am</td>
                <td rowspan="2" height="42">XPath</td>
            </tr>
            <tr>
                <td rowspan="2">11 am</td>
                <td rowspan="2">2 pm</td>
            </tr>
            <tr>
                <td rowspan="2">XSL Transformation</td>
            </tr>

            <tr>
                <td>2 pm</td>
                <td>5 pm</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>8 am</td>
                <td>12 pm</td>
                <td>XSL Formatting Objects</td>
            </tr>
        </tbody>

    </table>
    </div>
    </div>
  )
}

export default Pdf