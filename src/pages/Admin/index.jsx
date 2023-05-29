import React, { useContext, useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import { Link } from "react-router-dom";
import { appContext } from "../../App";
import { Tree, TreeNode } from "react-organizational-chart";
import { Icon } from "@iconify/react";

const Admin = () => {
  const [change, setChange] = useState(null);
  const [toBeChange, setToBeChange] = useState(null);

  async function wantToChange() {
    const value2 = await getDoc(doc(firestore, "理事", change));
    setToBeChange(value2.data());
  }

  useEffect(() => {
    if (toBeChange) {
      console.log(toBeChange);
    }
  }, [toBeChange]);

  useEffect(() => {
    if (change) {
      wantToChange();
    }
  }, [change]);

  const { uid } = useContext(appContext);
  const [value, loading, error] = useCollection(collection(firestore, "理事"));
  const [data, SetData] = useState();

  useEffect(() => {
    if (value) {
      SetData(value.docs);
    }
  }, [value]);

  data?.sort((a, b) => {
    return a.data().sort - b.data().sort;
  });

  const [name, UpdateName] = useState("");
  const [name2, UpdateName2] = useState("");
  const ChangeName = async () => {
    await updateDoc(doc(firestore, "理事", change), {
      name: name,
    }).then(() => setChange(null));
  };
  const ChangeName2 = async () => {
    await updateDoc(doc(firestore, "理事", change), {
      name2: name2,
    }).then(() => setChange(null));
  };
  return (
    <div className="w-full px-32 flex justify-center items-center flex-col p-5">
      {uid == "VzMj9MZAW3RNFQyskyXcdQJSgDr1" ? (
        <div className="flex w-full justify-center items-center flex-col mt-16">
          <h1 className="text-5xl special-font mb-12">理事名单管理面板</h1>
          <table className="w-full text-lg rounded-t-md overflow-hidden">
            <tr className="bg-blue-500 text-white">
              <th width="70%" className="py-3 font-semibold">
                职位
              </th>
              <th width="10%" className="py-3 font-semibold">
                姓名1
              </th>
              <th width="10%" className="py-3 font-semibold">
                姓名2
              </th>
              <th width="10%" className="py-3 font-semibold">
                操作
              </th>
            </tr>
            {data?.map((doc) => {
              return (
                <tr className="border-b text-center even:bg-blue-500/10 last:border-b-2 last:border-blue-500">
                  <td width="70%" className="py-3 px-6 text-left">
                    {doc.id}
                  </td>
                  <td width="10%" className="py-3">
                    {doc.data().name}
                  </td>
                  <td width="10%" className="py-3">
                    {doc.data().name2 ? <p>{doc.data().name2}</p> : ""}
                  </td>
                  <td width="10%" className="py-3">
                    <button
                      className="px-3 py-2 text-blue-500 font-medium text-base"
                      onClick={() => {
                        setChange(doc.id);
                      }}
                    >
                      更换
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <div className="text-4xl  special-font">无权访问</div>
      )}
      <div>
        {change ? (
          <div className="flex justify-center items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-96 bg-white shadow-xl rounded-lg p-6">
            <div className="special-font text-3xl flex items-center justify-between w-full">
              <h3>更换理事</h3>
              <button onClick={() => setChange(null)}>
                <Icon icon="uil:multiply" className="w-6 h-6" />
              </button>
            </div>
            <div className="text-5xl text-[#577AF6] special-font flex-1 flex items-center justify-center">
              {change}
            </div>
            <div className="flex-1 text-xl w-full ">
              <div
                className="flex items-center
               p-5 justify-between w-full"
              >
                <p className=" text-center">{toBeChange?.name}</p>
                <Icon icon="maki:arrow" />
                <input
                  className="w-1/3 bg-gray-100 rounded-md p-2 text-center"
                  placeholder="无"
                  value={name}
                  onChange={(e) => UpdateName(e.target.value)}
                />
                <button onClick={() => ChangeName()}>更换</button>
              </div>
              <div>
                {toBeChange?.name2 ? (
                  <div className="flex items-center p-5 justify-between">
                    <p className=" text-center">{toBeChange.name2}</p>
                    <Icon icon="maki:arrow" />
                    <input
                      className="w-1/3 bg-gray-100 rounded-md p-2 text-center"
                      placeholder="无"
                      value={name2}
                      onChange={(e) => UpdateName2(e.target.value)}
                    />
                    <button onClick={() => ChangeName2()}>更换</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Admin;
