import { useRouter } from "next/router";
import { Fragment } from "react";

import Head from 'next/head'
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add new MeetUp</title>
        <metadata name="description" conten="Add new meet up "></metadata>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
