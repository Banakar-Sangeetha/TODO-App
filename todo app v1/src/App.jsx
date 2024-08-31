import Appname from "./components/AppName";
function App() {

  return (
    <div>
      <Appname></Appname>
      <div class="container text-center">
  <div class="row">
    <div class="col-4"><input type="text" placeholder='enter the todo....'/></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-success">ADD</button></div>
  </div>
  <div class="row">
    <div class="col-4">buy milk</div>
    <div class="col-4">12/03/2003</div>
    <div class="col-2"><button type="button" class="btn btn-danger">remove</button></div>
  </div>
  <div class="row">
    <div class="col-4">buy books</div>
    <div class="col-4">14/03/2003</div>
    <div class="col-2"><button type="button" class="btn btn-danger">remove</button></div>
  </div>
</div>
      </div>
  )
}

export default App
