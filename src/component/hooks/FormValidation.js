import React,{useState} from 'react'

function FormValidation() {
  const[nameData, setNameData] = useState('');
  const[movieData, setMovieData] = useState('')
  const [termData, settermData] = useState(false);

function getFormData(e){
  e.preventDefault();
  console.log(nameData,movieData, termData)
}
function getNameData(e){ 
  setNameData(e.target.value)
}
function getMovieData(e){
  setMovieData(e.target.value)
}
function getCheckData(e){
  settermData(e.target.checked)
}
  return (
    <>
      <h3>FormValidation</h3>
      <form onSubmit={getFormData}>
        name: <input typre='text' placeholder='enter name' onChange={getNameData}/>
        {nameData}
        <br>
        </br>
        <br></br>
        <select onChange={getMovieData}>
          <option>select given option</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>Nepali</option>
          <option>South Movie</option>
          <option>Bhojpuri</option>
        </select>
        {movieData}
        <br></br>
        <br></br>
        <input type='checkbox' onChange={getCheckData}/><span>Accept given term and condition</span>
        <br></br>
        <br></br>
        {termData}
        <button type='submit'>submit</button>

      </form>
    </>
  )
}
export default FormValidation;
