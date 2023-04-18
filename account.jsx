// this keeps a running total of deposits and withdrawals

const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Withdrawal"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

const BankAccount = () => {
  let deposit = 0;
  
  const [accountState, setAccountState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  //console.log(`Account total = ${accountState}`);
  
  const handleChange = event => {
    deposit = Number(event.target.value);
  };
  const handleSubmit = event => {
    console.log('submitted');
    let newTotal = isDeposit ? accountState + deposit : accountState - deposit;
    setAccountState(newTotal);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Withdrawal</button>
      <br/><br/>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
      <h6>Account Balance: {accountState}</h6>
    </form>
  );
};
// ========================================
ReactDOM.render(<BankAccount />, document.getElementById("root"));
