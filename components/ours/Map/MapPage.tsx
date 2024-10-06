import { Map } from "./map"
export default function MapPage(){
    return (
        <div className={"min-h-full"}>
            <main>
                <div className={"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"}>
                    <h1 className={"text-black"}>Home</h1>
                    <Map/>
                </div>
            </main>
        </div>
    )
}