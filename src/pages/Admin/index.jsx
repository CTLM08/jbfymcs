import React, { useContext, useEffect } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import { Link } from "react-router-dom";
import { appContext } from "../../App";
const Admin = () => {
  const { uid } = useContext(appContext);
  const [value, loading, error] = useCollection(collection(firestore, "理事"));
  return (
    <div className="w-full flex justify-center items-center flex-col p-5">
      {uid == "VzMj9MZAW3RNFQyskyXcdQJSgDr1" ? (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-6xl special-font">管理面板</h1>
          <div className="flex w-full justify-center items-center flex-col gap-4">
            <div className="flex flex-col gap-3 w-full p-5 ">
              {value?.docs.map((doc) => {
                return (
                  <Link>
                    <div className="flex flex-col w-full p-5 justify-center items-center">
                      <h1 className="text-[#577AF6]  text-4xl special-font">
                        {doc.id}
                      </h1>
                      <p className="mt-2 text-xl">{doc.data().name}</p>
                      <p className=" text-xl">{doc.data()?.name2}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-4xl  special-font">无权访问</div>
      )}
    </div>
  );
};

export default Admin;
