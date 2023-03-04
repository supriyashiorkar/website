import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './lcalci.css'
function LCalculator(){

  function checkLovePer(){

    var name=document.getElementById('name').value;
    var lovename=document.getElementById('lovename').value;

    if(name==""){
      alert("Please Enter Your Name First")
    }
    else if(name<=2){
      alert("Min Lengh is 3")
    }
    else if (!isNaN(name)){
      alert("only Characters allowed");
    }
    if(lovename==""){
      alert("Please Enter Your Name First")
    }
    else if(lovename<=2){
      alert("Min Lengh is 3")
    }
    else if (!isNaN(lovename)){
      alert("only Characters allowed");
    }
var loveData=Math.random()*100;
loveData=Math.floor(loveData);
document.getElementById('loveValue').value=loveData+"%";
  }
    return(
        <>
        <div className='calci'>
        <Card className="text-center w-50 m-auto text-center" id='text'>
      <Card.Header className='bg-danger text-white'>LOVE CALCULATOR</Card.Header>
      <Card.Body>
       
        <Card.Text>
          <form className='form-inline w-50 m-auto'>
            <div className='form-group'>
                <input type='text' name='' placeholder='Your Name' className='form-control text-center' id='name'/>
              <span className='pl-4 pr-4'>+</span>
                <input type='text' name='' placeholder='Love Name'className='form-control text-center' id='lovename'/>
            </div>
            
          </form>
        </Card.Text>
        <Button variant="success w-50 m-auto"onClick={()=>checkLovePer()}>Click</Button>
      </Card.Body>

      <div>
        <input type="text" name='' id='loveValue' className='form-control text-center w-25 m-auto ' placeholder='Love Percentage '/>
      </div>
      <Card.Footer className="text-muted">God Bless Your Relationship</Card.Footer>
    </Card>
    </div>
        </>
    )
}
export default LCalculator