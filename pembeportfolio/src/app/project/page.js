import Navigation from "../../../components/navigation"; //Navigation.js module is imported here

const Project = () => { //ES6 arrow function
  return ( 
    <div className="flex w-screen">
      <div><Navigation /></div>
      <div className="m-16">
        <h1 className="text-slate-400">Project Page</h1>
      </div>
    </div>
   );
}
 
export default Project;