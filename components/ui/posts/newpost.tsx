import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPost() {
  return (
    <div className="flex justify-center my-4">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Crear publicación</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Publicación nueva</DialogTitle>
              <DialogDescription>
                Agrega un título y contenido para crear una nueva publicación.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Título</Label>
                <Input id="name-1" name="name" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Contenido</Label>
                <Input id="content" name="content" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
