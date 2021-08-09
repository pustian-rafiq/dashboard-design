import React,{Fragment} from 'react'
import '../../assets/css/bootstrap.min.css'
function Navbar(){
return(
    <Fragment>
        <div className="container-fluid">
            {/* <div className="row" style={{ background:'blue' }}>
              <div className="col-xs-12 col-sm-12 col-md-9">
                  <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-1  box">
                    Product Configuration
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1 box">
                    Purchase Order
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1 box">
                    Sales Order
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1  box">
                    Credit Sales
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1  box">
                  Credit Sales
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1 box">
                  Credit Sales
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1 box">
                  Credit Sales
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1  box">
                  Credit Sales
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-1 box">
                  Credit Sales
                  </div>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3">
               
                
                   <h2>EHSAN ENTERPRISE</h2>
                   <p>Inventory Management Software(IMS)</p>
                 
                
             </div>
                
                 
             

            </div> */}

            
<div className="row" >
  <div className="column">
    <div class="card">
     
      <p>Product Configuration</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    
      <p>Purchase Order</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      
      <p>Sales Order</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    
      <p>Credit Sales</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
        <p>Cash Collection</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
       <p>Cash Delivery</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
 
      <p>Income</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
  
      <p>Expense</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
  
      <p>MIS Report</p>
    </div>
  </div>
  <div className="column2">
     
      <h3>EHSAN ENTERPRISE</h3>
      <p>Inventory Management Software(IMS)</p>
     
  </div>
</div>

</div>
    </Fragment>

);
}

export default Navbar;