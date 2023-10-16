import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import a from './assets/4.png';
import b from './assets/pinapple.png';
import c from './assets/mango.png';
import d from './assets/rice.png';
import e from './assets/1.png';
import f from './assets/2.png';
import g from './assets/3.png';
import h from './assets/5.png';
import i from './assets/6.png';
import j from './assets/7.webp';
import uniqid from 'uniqid';

import { useEffect, useReducer, useState } from 'react';
import Modle from './component/Modal';
import Modale from './component/Modal';
export default function App() {
  const [itemForOrder, setItemForOrder] = useState([]);
  let [a,setA]=useReducer(x=> x+1,0);
  let [isInAnOrder,setIsAnOrder]=useState(false);
  const [items, setItems] = useState([
    { id: '001', img: a, name: 'Burger 1', price: '12' },
    { id: '002', img: b, name: 'Pinapple', price: '25' },
    { id: '003', img: c, name: 'Mango', price: '15' },
    { id: '004', img: d, name: 'Rice', price: '10' },
    { id: '005', img: e, name: 'chips', price: '35' },
    { id: '006', img: f, name: 'Chickn', price: '12' },
    { id: '007', img: g, name: 'Burger 2', price: '32' },
    { id: '008', img: h, name: 'Burger 3', price: '54' },
    { id: '009', img: i, name: 'Burger 4', price: '16' },
    { id: '010', img: j, name: 'Chikn 2', price: '36' }
  ]);
  const pickItems = (id) => {
    /*if(isInAnOrder!=true){
      setIsAnOrder(true);
      setTime();
    }*/
    let temp = items.find(e => e.id == id);
    let item = {
      id: temp.id,
      name: temp.name,
      qty: 1,
      total: temp.price
    }
    let isExits = isAlerdyExits(id);
    if(isExits!=-1){
      itemForOrder[isExits]={
        id:itemForOrder[isExits].id,
        name:itemForOrder[isExits].name,
        qty:Number(itemForOrder[isExits].qty)+1,
        total:Number(itemForOrder[isExits].total)+Number(temp.price)
      }
    }
    else{
      setItemForOrder([...itemForOrder,item]);
    }
    setA();
    total();
  }
  const isAlerdyExits = (id) => {
    for (let i = 0; i < itemForOrder.length; i++) {
      if (itemForOrder[i].id == id) {
        return i;
      }
    }
    return -1;
  }
  let timeCount='';
  const setTime=()=>{
    let sec='';
    let min='';
    timeCount=setInterval(()=>{
      sec++;
      if(sec<10){
       document.getElementById('sec').innerHTML='0'+sec;
      }
      else if(sec>10){
        document.getElementById('sec').innerHTML=sec;
      }
      if(sec==60){
        sec='';
        min++;
        if(min<10){
          document.getElementById('min').innerHTML='0'+min;
        }
        else{
          document.getElementById('min').innerHTML=min;
        }
      }
    },1000)
  }
  let tot=0;
  let total=()=>{  
    itemForOrder.map((e)=>{
      tot+=Number(e.total)
    })
    document.getElementById('tot').innerHTML=tot;
    setA();
  }
  function Orders(id,date,takingTime,placedTime,total,presentedTime,items){
    this.id=id;
    this.date=date;
    this.takingTime=takingTime;
    this.placedTime=placedTime;
    this.total=total;
    this.presentedime=presentedTime;
    this.items=items;
  }
  let [allOrder,setAllOrder]=useState([]);
  const placeOrder=()=>{
    if(itemForOrder.length==0){
      alert('Make a Order First')
    }
    else{
    let date=new Date().toISOString().split('T')[0];
    let takingTime=new Date().toLocaleTimeString();
    let placedTime=document.getElementById('min').innerHTML+':'+document.getElementById('sec').innerHTML;
    let total=document.getElementById('tot').innerHTML;
    let presentedime=new Date().toLocaleTimeString();
    let order=new Orders(uniqid(),date,takingTime,placedTime,total,presentedime,itemForOrder);
    setAllOrder([...allOrder,order])
    setItemForOrder([]);
    resetOrder();
    setA();
    }
  }
  const resetOrder=()=>{
    setIsAnOrder(false);
    clearInterval(timeCount);
    tot=0;
    document.getElementById('tot').innerHTML='00.00';
    document.getElementById('sec').innerHTML='00';
    document.getElementById('min').innerHTML='00';
    
    }
 
  return (
    <>
      <div className="App">
        <div className="left">
          <div className="left-top">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>QTY</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                 {
                  itemForOrder.map((e,index)=>{
                    return(
                      <tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.qty}</td>
                        <td>{e.total}</td>
                      </tr>
                    )
                  })
                 }
              </tbody>
            </table>
          </div>
          <div className="left-bottom">
            <div className="left-bottom-top">
              <div className="time-outer">
                <h3><span id='min'>00</span>:<span id='sec'>00</span></h3>
              </div>
              <div className="price-outer">
                <h3><span id='tot'>00.00</span>$</h3>
              </div>
            </div>
            <div className="left-bottom-bottom">
              <button className='btn btn-primary col-10' onClick={()=>placeOrder()}>Place Order</button>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="btn-bar">
            <div className="btn-bar-left">
              <button style={{ marginLeft: '10px' }} disabled className='btn btn-primary' onClick={() => manageCount('1')}>1</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('2')}>2</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('3')}>3</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('4')}>4</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('5')}>5</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('6')}>6</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('7')}>7</button>
              <button className='btn btn-primary' disabled  onClick={() => manageCount('8')}>8</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('9')}>9</button>
              <button className='btn btn-primary' disabled onClick={() => manageCount('0')}>0</button>
              <button className='btn btn-primary' disabled onClick={() => clearCount()}>C</button>
              <Modale allOrder={allOrder}/>
            </div>
            <div className="btn-bar-right">
              <h3><span>00</span></h3>
            </div>
          </div>
          <div className="item-area">
            {
              items.map((e, index) => {
                return (
                  <div className="items" key={index} onClick={() => pickItems(e.id)}>
                    <div className="name-price">
                      <p>{e.name}</p>
                      <p>{e.price}</p>
                    </div>
                    <img src={e.img} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="right">
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody id='left-tbl'>
              {
                allOrder.map((e,index)=>{
                  return(
                    <tr key={index}>
                      <td>{e.id}</td>
                      <td>{e.date}</td>
                      <td>{e.total}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
