"use client";

import { ContactsForm } from "./ContactsForm";

const Contacts = () => {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <h1 className="text-center text-6xl font-bold">CONTACTS</h1>
      <div className="mt-8 max-w-2xl mx-auto">
        <ContactsForm />
      </div>
    </div>
  );
};
export default Contacts;
