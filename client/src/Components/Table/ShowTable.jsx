import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';
import sidebar from '../Sidebar/NewSidebar'
import Sidebar from '../Sidebar/NewSidebar';

const headerSortingStyle = { backgroundColor: '#c8e6c9' };

const columns = [{

    dataField: '_id',
    text: 'Product ID',
    sort: true,
    headerSortingStyle

    }, {
    dataField: 'title',
    text: 'Product Name',
    sort: true,
    headerSortingStyle,
    filter: textFilter({ caseSensitive: true })
}, {
  dataField: 'link',
  text: 'Product Price'
}];

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];
  

const ShowTable = ({question}) => {
    return (
        <>
        <Sidebar />
        <div style={{marginLeft:'150px', marginRight:'30px'}}>
            <BootstrapTable keyField='id' data={question} columns={columns} defaultSorted={ defaultSorted }  cellEdit={cellEditFactory({ mode: 'click' })} filter={filterFactory()} />
     
            {/* <table>
                <tr>
                    <th>Id</th>
                    <th>Question Title</th>
                </tr>
                {question && question.length > 0 ?
                    question.map((x,key) =>
                        <tr>
                            <td>{key+1}</td>
                            <td>{x.title}</td>
                        </tr>
                    ):"Loading..."
                }
            </table> */}
            </div>
        </>
    )
}

export default ShowTable