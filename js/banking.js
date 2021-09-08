  //handle deposit button event
  document.getElementById('deposit-btn').addEventListener(
    'click',function(){
        const depositField=document.getElementById('deposit-amount');
        const depositAmount=depositField.value;

        const depostiTotal=document.getElementById('deposit-total');
        
        const currentdepositAmount= depostiTotal.innerText
        const newDepositAmount= parseFloat(currentdepositAmount) + parseFloat(depositAmount)

        depostiTotal.innerText=newDepositAmount
        
        const balance=document.getElementById('balance-total')
        const previousbalance=balance.innerText
        currentBalance =parseFloat(previousbalance) + parseFloat(newDepositAmount)
        balance.innerText=currentBalance

     

        //clear deposit input
        depositField.value='';
    });
    document.getElementById('withdraw-btn').addEventListener(
        'click',function(){
            const withdrawField=document.getElementById('withdraw-amount');
            const withdrawAmount=withdrawField.value;
    
            const withdrawTotal=document.getElementById('withdraw-total');
            
            const currentwithdrawAmount= withdrawTotal.innerText
            const newwithdrawAmount=  parseFloat(withdrawAmount)-parseFloat(currentwithdrawAmount)
    
            withdrawTotal.innerText=newwithdrawAmount
            
            const balance=document.getElementById('balance-total')
            const previousbalance=balance.innerText
            currentBalance =parseFloat(previousbalance) - parseFloat(newwithdrawAmount)
            balance.innerText=currentBalance
    
         
    
            //clear deposit input
            withdrawField.value='';
        });