import { messages } from "../../../../data/messages";

export default function handler(req, res) {
    if(!res){
        return (
          <h1>
            now
          </h1>  
        )
    }else{
      res.status(200).json(messages)
    }
    
}