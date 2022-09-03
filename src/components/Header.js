import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import {DLT} from "../redux/actions/action";

function Header() {

  const [price,setPrice] = useState(0);
  console.log("price",price)
    const getdata = useSelector((state)=>state.cartreducer.carts);
    console.log("getData",getdata)

    const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id) => {
    dispatch(DLT(id));
  }

  const total = () =>{
    let price = 0;
    getdata.map((ele,k)=>{
      price = ele.price * ele.qnty + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getdata.length ? 
          <div className="card_details"style={{width:"24rem",padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th>Photos</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return (
                      <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`}> <img src={e.imgdata}  alt="" style={{width:"5rem",height:"5rem"}} onClick={handleClose} /></NavLink>
                         
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price : ₹ {e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p style={{cursor:"pointer",fontSize:20,color:"red"}} onClick={()=>dlt(e.id)}>
                            <i className="fas fa-trash smalltrash" ></i>
                          </p>
                        </td>
                        <td className="mt-5" style={{cursor:"pointer",fontSize:20,color:"red"}}>
                        <i className="fas fa-trash largetrash"onClick={()=>dlt(e.id)}></i>
                        </td>
                      </tr>
                      </>
                    )
                  })
                }
                <p className="text-center">Total : ₹{price}</p>
              </tbody>
            </Table>
          </div>:
          <div className="card_details d-flex justify-content-center align-item-center" style={{width:"rem",padding:10,position:"relative"}}>
          <i onClick={handleClose} className="fas fa-close smallclose" style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"Pointer"}}></i>
          <p style={{fontSize:22}}>Your cart is empty</p>
          <img src="https://raw.githubusercontent.com/harsh17112000/react_redux_cart_youtube/main/public/cart.gif" alt="hello" className="emptycart_img" style={{width:"5rem",padding:10}} />
         </div>
        }
       
      </Menu>
      </Navbar>
    </div>
  );
}
export default Header;
