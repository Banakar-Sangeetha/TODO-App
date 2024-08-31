function Additem2(){

  let name="buy book";
  let date="12/03/2023";
return(
  <div class="row">
    <div class="col-4">{name}</div>
    <div class="col-4">{date}</div>
    <div class="col-2"><button type="button" class="btn btn-danger">remove</button></div>
  </div>
)
}

export default Additem2;