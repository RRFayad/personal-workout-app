import AuthButtons from "@/components/AuthButtons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="fixed right-[calc(50%-160px)] top-[calc(50%-180px)]">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle className="flex justify-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <AuthButtons />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
