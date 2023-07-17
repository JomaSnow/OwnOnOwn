import { useEffect, useState } from "react";
import Display from "./Display";
import { usePodFriends } from "../../hooks/PodFriendsProvider";

export default function HomePage() {
  const [friendOptions, setFriendOptions] = useState([]); // {values:friendWebId, text:nome}
  const [selectedFriend, setSelectedFriend] = useState(-1); // id
  const [friendObj, setFriendObj] = useState(); // id

  const { friends } = usePodFriends();

  // popula array de opções
  useEffect(() => {
    const friendVec = [];
    for (const friend of friends) {
      friendVec.push({ value: friend.friendWebId, text: friend.nome });
    }
    setFriendOptions(friendVec);
  }, [friends]);

  // resgata objeto amigo baseado no amigo selecionado
  useEffect(() => {
    setFriendObj({ nome: "Amigo", agenda: null });

    for (const friend of friends) {
      if (friend.friendWebId === selectedFriend) {
        setFriendObj(friend);
      }
    }
  }, [selectedFriend, friends]);

  return (
    <Display
      friendsOptions={friendOptions}
      selectedFriend={selectedFriend}
      setSelectedFriend={setSelectedFriend}
      friend={friendObj}
    />
  );
}
