import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function Login() {
  return (
    <div className="min-h-screen bg-neutral-800 flex flex-col items-center justify-center p-4">
      <h1 className=" text-cyan-300 text-4xl font-bold mb-4 ">EMS Defect Tracker</h1>
      <p className="text-gray-400">Select your role to continue</p>
      <div className="flex flex-col w-full max-w-md mt-8 justify-center">
        <Button className="bg-cyan-500 hover:bg-cyan-700 m-2">User</Button>
        <Button className="bg-cyan-500 hover:bg-cyan-700 m-2">Admin</Button>
      </div>
    </div>
  )
}