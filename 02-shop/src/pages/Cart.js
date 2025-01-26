import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function Cart() {

  let cart = useSelector((state) => {return state.cart}) // Redux store 가져와줌

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item, index) => (
              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>안녕</td>
              </tr>
            ))
          }

        </tbody>
      </Table> 
    </div>
  )
};
