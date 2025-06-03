import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-cyan-400 font-bold">
            EMS Defect Tracker
          </CardTitle>
          <CardDescription className="text-gray-400">
            Sign in to your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-medium">
            Sign In
          </Button>
          <div className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Button variant="link" className="text-cyan-400 px-0">
              Register
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}