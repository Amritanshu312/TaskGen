import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from 'react';
import EditCollection from '@/components/Collection/EditCollection';
import { editCollectionData } from '@/utils/CollectionsHandling';
import { toast } from "react-toastify";
import { useUserContext } from '@/context/UserInfo';
import Link from 'next/link';
import { encodeBase64ToUrlSafe, encryptSentence } from '@/utils/wordEncrypterDecrypter';

const CollectionsItem = ({
  collectionColor = "#fa76a0",
  collectionName = "General",
  hashID,
  favourites,
  taskFinished = 0,
  totalTasks = 0,
  userInfo
}) => {
  const { setCollectionsData } = useUserContext();

  // useState hook calls
  const [isToggled, setIsToggled] = useState(false);
  const [isCollectionEditOpened, setIsCollectionEditOpened] = useState(false);
  const [isFav, setIsFav] = useState(favourites === true || false);

  useEffect(() => {
    if (isToggled) {
      setIsToggled(false);
      toast.promise(
        editCollectionData(userInfo, collectionName, collectionColor, hashID, isFav),
        {
          pending: `${isFav ? 'Adding To' : 'Removing From'} Favourites...`,
          success: `${isFav ? 'Added To' : 'Removed From'} Favourites`,
          error: `Error ${isFav ? 'Adding To' : 'Removing From'} Favourites...`,
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFav]);

  const handleToggleFav = () => {
    setIsFav((prev) => !prev);
    setCollectionsData((prev) => {
      const itemIndex = prev.findIndex((item) => item?.hashID === hashID);
      const item = prev[itemIndex];

      // Only update if necessary
      const updatedItem = {
        ...item,
        favourites: !isFav
      };

      return [
        ...prev.slice(0, itemIndex),
        updatedItem,
        ...prev.slice(itemIndex + 1)
      ];

    });
  };

  const generateUrl = (hashID, collectionName) => {
    const encryptedName = encodeBase64ToUrlSafe(encryptSentence(collectionName));
    const encryptedNameWithKey = encodeBase64ToUrlSafe(encryptSentence(collectionName, "2BqQPTp9AFXWJLl5L2oYyR"));
    const encryptedNameWithKey2 = encodeBase64ToUrlSafe(encryptSentence(collectionName, "4a85eb8300c5679e8d3a0461b8ed834d"));
    const encryptedNameWithKeyreconfirm = encodeBase64ToUrlSafe(encryptSentence(collectionName, "18585412F2QWuZDSTmxW7Ts8W"));

    return `/project/${hashID}?n=${encryptedName}&c=${encryptedNameWithKey}&cf=${encryptedNameWithKey2}&pl=${encryptedNameWithKeyreconfirm}`;
  };


  return (
    <>
      <motion.div
        variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }}
        className="w-full h-44 rounded-3xl shadow-md bg-[#21212b] px-6 py-4 flex flex-col justify-between font-['poppins']"
      >
        <div className="flex justify-between">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl" style={{ background: collectionColor }}>
            {collectionName.slice(0, 1).toUpperCase()}
          </div>

          <div className="text-xl cursor-pointer text-[#bababc] relative">
            <div className="hover:text-white" onClick={() => setIsToggled((prev) => !prev)}>
              <BsThreeDots />
            </div>

            {isToggled && (
              <div className="absolute w-max top-6 right-0 bg-[#414051] rounded-md text-sm overflow-hidden">
                <div
                  className="hover:bg-blue-500 py-1 px-2"
                  onClick={() => {
                    setIsCollectionEditOpened((prev) => !prev);
                    setIsToggled(false);
                  }}
                >
                  Edit
                </div>
                <div
                  className="hover:bg-violet-500 py-1 px-2 text-[13px]"
                  onClick={handleToggleFav}
                >
                  {isFav ? 'Remove from Favourites' : 'Add to Favourites'}
                </div>
                <div className="hover:bg-red-500 py-1 px-2">Delete</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="gap-2 flex flex-col">
            <Link href={generateUrl(hashID, collectionName)} className="font-medium text-xl cursor-pointer line-clamp-1 text-ellipsis overflow-hidden max-w-[120px]" title={collectionName}>
              {collectionName}
            </Link>

            <div className="text-[#bababc] text-sm">
              {taskFinished}/{totalTasks} done
            </div>
          </div>

          <CircularProgressbar
            value={totalTasks > 0 ? (taskFinished * 100) / totalTasks : 0}
            className="!w-6 mb-2"
            strokeWidth={15}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: collectionColor,
              trailColor: '#33333f',
            })}
          />
        </div>
      </motion.div>

      {isCollectionEditOpened && (
        <EditCollection
          addedTitle={collectionName}
          addedcolor={collectionColor}
          hash={hashID}
          onclick={setIsCollectionEditOpened}
          favourite={favourites}
        />
      )}
    </>
  );
};

export default CollectionsItem;
