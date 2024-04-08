export default function handler(req, res) {
    if(!res){
        return (
            <h1 className="flex justify-center items-center h-screen bg-red-700 text-4xl font-extrabold">
                Oops! an Error Occurred here.
            </h1>            
        )
    }
        res.status(200).json({ name: 'home API route' })
}