function Customer() {
    function handleSubmit () {
        console.log('submitted');
    }

  return (
    <div className="display">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Address"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="Zip"></input>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Customer;

// inputs for customer info, we will need to 
// send this information to a customerReducer for storage upon form submit as an object from local state
// empty inputs
// navigate to /checkout


