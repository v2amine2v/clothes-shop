import "./style/catalog.css"
import Return from "./Return";
import data from "./data"
export default function Catalog() {
 const retunEl = data.map((info) => {

     return(
		 <Return
	        key = {info.id}
	        {...info}
	     />  
		)})

	return (
	<div className="full-container">

		<div className="catalog-container">

		   {retunEl}

		</div>
		
	</div>	
	);
}