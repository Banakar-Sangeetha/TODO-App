function Additem1(){

  let name="buy milk";
  let date="12/03/2023";
return(<div className="container">
<div class="row kg-row">
    <div class="col-6">{name}</div>
    <div class="col-4">{date}</div>
    <div class="col-2"><button type="button" class="btn btn-danger kg-Button">remove</button></div>
  </div>
</div>
)
}

export default Additem1;