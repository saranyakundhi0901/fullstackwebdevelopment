function app(){
  const name="Saranya";
  const age=20;
  const department="CSE";
  
  return(
    <div>
      <h1>Student information</h1>
      <h2>Name:{name}</h2>
      <h3>Age:{age}</h3>
      <h4>Department:{department}</h4>
      <button onClick={()=>alert("Welcome "+ name)}>Welcome</button>

    </div>
  );
}
export default app;