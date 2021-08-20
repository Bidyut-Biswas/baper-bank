/* 
function inputValue(id){
    let inputNumber=document.getElementById(id);
    let inputValue=parseFloat(inputNumber.value);
    return inputValue;
}


function getDeposite(){
    const depositeNumber=inputValue('deposite-input');
    getCurrentValue('total-deposite',depositeNumber)
    getCurrentValue('total-balance',depositeNumber)
    document.getElementById('deposite-input').value=''
}

function getWithdraw(){
    const withdrawNumber=inputValue('withdraw-input')
    getCurrentValue('total-withdraw',withdrawNumber);
    getCurrentValue('total-balance', -1*withdrawNumber);
    document.getElementById('withdraw-input').value=''
    
}

function getCurrentValue(id,depositeNumber,isAdd){
    let currentDeposite=document.getElementById(id);
    let totalDepositeNumber=parseFloat(currentDeposite.innerText);
    
    let totalDeposite=depositeNumber+totalDepositeNumber;
    currentDeposite.innerText=totalDeposite;
} 

*/


document.getElementById('deposite-btn').addEventListener('click',function(){
    changeBalance('deposite');

});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    changeBalance('withdraw');
});


function changeBalance(type){
    const inputAmount=document.getElementById(`${type}-input`);
    

    if(inputAmount.value.length!=0){
        if(inputAmount.value>0){
            const inputNumber=parseFloat(inputAmount.value);
        
        const currentDepositeText=document.getElementById(`total-${type}`);
        const currentDeposite=currentDepositeText.innerText;
    
        const currentDepositeNumber=parseFloat(currentDeposite)
        const totalDepositeNumber=inputNumber+currentDepositeNumber;
        currentDepositeText.innerText=totalDepositeNumber;

        const currentTotalText=document.getElementById('total-balance');
        const currentTotalNumber=parseFloat(currentTotalText.innerText);
            
        if(type=="deposite"){
            currentTotalText.innerText=currentTotalNumber+inputNumber;
        }else{
            currentTotalText.innerText=currentTotalNumber-inputNumber;
        }
        inputAmount.value='';
        }
        
    }else{
        alert('enter a deposite or withdraw number')
    }
    
}

