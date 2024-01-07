import React, { useState } from 'react';
import '../index.css';
import Button from './Button';
export default function FormSplitBill({selectedFriend, onSplitBill}) {
 const [bill , setBill] = useState("");
 const [paidByUser , setPaidByUser] = useState("");
 const [whoIsPaying, setWhoIsPaying] = useState("");
  const paidByFriend = bill? bill - paidByUser:"";

  function handleSubmit(e){
    e.preventDefault();
    if(!bill || !paidByUser)return;
    onSplitBill(whoIsPaying==="user" ? paidByFriend:-paidByUser);
  }
    return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))} />
      <label>💸Your expense</label>
      <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value)>bill ? paidByUser:Number(e.target.value))} />
      <label>👩🏾‍🤝‍👩🏾 {selectedFriend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />
      <label>Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}
