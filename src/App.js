import React from "react"
import { useState, useEffect } from "react"
import ticImg from '../src/tictac.PNG'
import style from './style.css'
function App() {

  const [fPlayer, setfPlayer] = useState("");
  const [sPlayer, setsPlayer] = useState("");
  const [fpCode, setfpCode] = useState("X");
  const [spCode, setspCode] = useState("O");
  const [one, setone] = useState("")
  const [two, settwo] = useState("")
  const [three, setthree] = useState("")
  const [four, setfour] = useState("")
  const [five, setfive] = useState("")
  const [six, setsix] = useState("")
  const [seven, setseven] = useState("")
  const [eight, seteight] = useState("")
  const [nine, setnine] = useState("")
  const [p1Arr, setplayer1Arr] = useState([])
  const [allPlayer, setallPlayer] = useState([]);
  const [kk, setkk] = useState(false)

  const [dis2, setdis2] = useState(false)
  const [score1, setscore1] = useState(0)
  const [score2, setscore2] = useState(0)

  const [win, setwin] = useState("")

  useEffect(() => {
    checkWin();
  }, [one, two, three, four, five, six, seven, eight, nine])

  const enterPlayer = () => {
    let firstPlayer = { fPlayer, fpCode }
    let secondPlayer = { sPlayer, spCode }

    if (fPlayer != "" || sPlayer != "") {
      let bothPlayer = [...allPlayer, firstPlayer, secondPlayer]
      setallPlayer(bothPlayer)
    }
    else {
      alert('Please enter your name')
    }
  }
  let myInd;
  if (p1Arr.length < 1) {
    myInd = 0
  }
  else if (p1Arr.length >= 1) {
    myInd = p1Arr.length - 1
  }

  let arr1 = [...p1Arr, fpCode]
  let arr2 = [...p1Arr, spCode]

  const num1 = () => {
    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setone(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setone(fpCode)
    }
    setdis2(true)
  }
  const num2 = () => {

    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      settwo(spCode)
    }
    else {
      setplayer1Arr(arr1)
      settwo(fpCode)
    }
    // setdis2(true)

  }
  const num3 = () => {

    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setthree(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setthree(fpCode)

    }

  }
  const num4 = () => {
    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setfour(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setfour(fpCode)
    }
  }
  const num5 = () => {
    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setfive(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setfive(fpCode)

    }
  }
  const num6 = () => {

    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setsix(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setsix(fpCode)

    }

  }
  const num7 = () => {

    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setseven(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setseven(fpCode)
    }
  }
  const num8 = () => {

    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      seteight(spCode)
    }
    else {
      setplayer1Arr(arr1)
      seteight(fpCode)
    }
  }
  const num9 = () => {

    if (p1Arr[myInd] === fpCode) {
      setplayer1Arr(arr2)
      setnine(spCode)
    }
    else {
      setplayer1Arr(arr1)
      setnine(fpCode)

    }
  }


  const checkWin = () => {
    if ((one === fpCode && two === fpCode && three === fpCode) || (one === fpCode && four === fpCode && seven === fpCode) || (three === fpCode && six === fpCode && nine === fpCode) || (seven === fpCode && eight === fpCode && nine === fpCode) || (two === fpCode && five === fpCode && eight === fpCode) || (one === fpCode && five === fpCode && nine === fpCode) || (three === fpCode && five === fpCode && seven === fpCode) || (four === fpCode && five === fpCode && six === fpCode)) {
      setscore1(score1 + 1)
      setwin(allPlayer[0].fPlayer + " Won the game")
      setkk(true)
    } else if ((one === spCode && two === spCode && three === spCode) || (one === spCode && four === spCode && seven === spCode) || (three === spCode && six === spCode && nine === spCode) || (seven === spCode && eight === spCode && nine === spCode) || (two === spCode && five === spCode && eight === spCode) || (one === spCode && five === spCode && nine === spCode) || (three === spCode && five === spCode && seven === spCode) || (four === spCode && five === spCode && six === spCode)) {
      setscore2(score2 + 1)
      setwin(allPlayer[1].sPlayer + " Won the game")
      setkk(true)
    }
    else if (one === '' || two === '' || three === '' || four === '' || five === '' || six === '' || seven === '' || eight === '' || nine === '') {
      setwin("")
    }
    else if ((!(one === fpCode && two === fpCode && three === fpCode)) || (!(one === fpCode && four === fpCode && seven === fpCode)) || (!(three === fpCode && six === fpCode && nine === fpCode)) || (!(seven === fpCode && eight === fpCode && nine === fpCode)) || (!(two === fpCode && five === fpCode && eight === fpCode)) || (!(one === fpCode && five === fpCode && nine === fpCode)) || (!(three === fpCode && five === fpCode && seven === fpCode)) || (!(four === fpCode && five === fpCode && six === fpCode))) {
      setwin("No player Won the game, you both draw")
    }

  }
  const emptySet = () => {
    setone("");
    settwo("");
    setthree("");
    setfour("");
    setfive("");
    setsix("");
    setseven("");
    seteight("");
    setnine("");
    setplayer1Arr([])
    setwin("")
    setkk(false)
  }

  const cont = () => {
    emptySet()
  }
  const restart = () => {
    window.location.reload();
  }

// backgroung as color animation

  return (
    <body>
      <div className="container-fluid gen_fl" style={{ backgroundColor: '#AA292B',}}>
        <h2 className="text-center mt-2 text-warning pt-3">TIC TAC TOE GAME</h2>
        {
          allPlayer.length < 1 ?
            <div className=" row mt-4 p-4">
              <div className="col-8">
                <img src={ticImg} className='ticImg' style={{ display: 'flex', marginLeft: 'auto', }} />
              </div>
              <div className="row w-100 mt-3">
                <div className="form-floating col-md-6">
                  <input type="text" className="form-control w-100" placeholder="Enter player 1 here" name="fPlayer" onChange={(event) => setfPlayer(event.target.value)} value={fPlayer} />
                  <label for="">Player 1 Name</label>
                </div>
                <div className="mt-1 col-md-6">
                  <input type="text" className="form-control mt-2" maxlength="3" placeholder="supply your Id" onChange={(event) => setfpCode(event.target.value)} />
                </div>
              </div>
              <div className="row w-100 mt-2">
                <div className="form-floating col-md-6">
                  <input type="text" className="form-control w-100" placeholder="Enter player 2 here" name="sPlayer" onChange={(event) => setsPlayer(event.target.value)} value={sPlayer} />
                  <label for="" >Player 2 Name</label>
                </div>
                <div className="mt-1 col-md-6">
                  <input type="text" className="form-control mt-2" maxlength="3" placeholder="supply your Id" onChange={(event) => setspCode(event.target.value)} />
                </div>
              </div>
              <button className="btn btn-warning w-50 mt-3" onClick={enterPlayer}>Enter</button>
            </div>
            :
            <div className="row p-3">
              <div className="text-center col-md-6">
                <h3 className="text-center text-warning">{win}</h3>
                <div className="border px-5 border-5 border-light py-1" style={{ border: "1px solid darkred !important", borderRadius: "5vh 5vh", }}>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num1}>{one}</button>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num2}>{two}</button>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num3}>{three}</button><br></br>

                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num4}>{four}</button>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num5}>{five}</button>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num6}>{six}</button><br></br>

                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num7}>{seven}</button>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num8}>{eight}</button>
                  <button className="btn btn-warning text-light border border-dark rounded-0 ms-3 my-3 mt-2 p-4 w-25 fs-3 text-center" disabled={kk} onClick={num9}>{nine}</button>
                </div>
                <div className="btn-group mx-auto py-3">
                  <button className="btn btn-outline-warning text-light" onClick={cont}>Continue</button>
                  <button className="btn btn-warning ms-2" onClick={restart}>Restart</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border border-5 border-warning p-2" style={{ border: "1px solid #790000 !important", borderRadius: "5vh 0vh", }}>
                  <h2 className="card-header text-warning text-capitalize text-center fw-bold fs-1">score board</h2>
                  <table className="table text-center text-warning border-0" >
                    <thead>
                      <th className="fs-3 fw-bold">Name</th>
                      <th className="fs-3 fw-bold">User ID</th>
                      <th className="fs-3 fw-bold">Score</th>
                    </thead>
                    <tbody className="fs-3 fw-bold">
                      <tr>
                        <td className="py-3 fw-bold">{fPlayer}</td>
                        <td className="py-3 fw-bold">{fpCode}</td>
                        <td className="py-3 fw-bold">{score1}</td>
                      </tr>
                      <tr>
                        <td className="py-3 fw-bold">{sPlayer}</td>
                        <td className="py-3 fw-bold">{spCode}</td>
                        <td className="py-3 fw-bold">{score2}</td>
                      </tr>
                    </tbody>

                  </table>

                </div>
              </div>
            </div>
        }
      </div>

    </body>

  )
}

export default App