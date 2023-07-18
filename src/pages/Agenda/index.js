import { useEffect } from "react";
import Display from "./Display";

export default function AgendaPage() {
  // muda nome da página
  useEffect(() => {
    document.title = "Tutor | Agenda";
  }, []);

  return <Display />;
}
