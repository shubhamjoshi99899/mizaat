import { Box, Button, Dialog, Stack, Theme, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import { useRouter } from "next/router";
import Image from "next/image";
import copy from "copy-to-clipboard";
// import { Context } from "../../../context/ContextProvider";
// import { SuccessToast } from "../../common/toasts/toast-helpers";
interface Props {
  open?: any;
  handleClose?: any;
}

const ShareSocial: React.FC<Props> = ({ open, handleClose }) => {
  const router = useRouter();
  //   const context = useContext(Context)
  //   const toastContext = context?.Toast

  const handleCopyClick = () => {
    copy(`https://bookview.think201.xyz/single-book/${router?.query?.uuid}`);
    // SuccessToast("Link has been copied to your clipboard", toastContext);
    handleClose();
  };
  return (
    <>
      <Dialog sx={{ borderRadius: "12px" }} open={open} onClose={handleClose}>
        <Box sx={{ p: 5 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              color: (theme: Theme) => theme.palette.grey[50],
              textAlign: "left",
            }}
          >
            Share Via
          </Typography>
          <Stack direction={"row"} gap={3} sx={{ m: 3 }}>
            <FacebookShareButton
              url={`https://bookview.think201.xyz/single-book/${router?.query?.uuid}`}
              quote={"Book View is an app to trade your books ."}
              title={"Book View is an app to trade your books ."}
              hashtag={"#bookview"}
              windowWidth={1000}
              windowHeight={1000}
            >
              <FacebookIcon size={42} />
            </FacebookShareButton>
            <TelegramShareButton
              url={`https://bookview.think201.xyz/single-book/${router?.query?.uuid}`}
              title={"Book View is an app to trade your books ."}
              itemRef="/book.png"
            >
              <TelegramIcon size={42} />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`https://bookview.think201.xyz/single-book/${router?.query?.uuid}`}
              title={"Book View is an app to trade your books ."}
            >
              <WhatsappIcon size={42} />
            </WhatsappShareButton>

            <EmailShareButton
              url={`https://bookview.think201.xyz/single-book/${router?.query?.uuid}`}
              subject={"BooK View"}
              body="body"
            >
              <EmailIcon size={42} />
            </EmailShareButton>
          </Stack>
          <Box
            sx={{
              background: (theme: Theme) => theme.palette.primary.light,
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                overflow: "hidden",
                textOverflow: "elipsis",
                display: "-webkit-box",
                whiteSpace: "nowrap",
                mb: 1,
              }}
            >
              {`https://mizaatfashion/single-product/${router?.query?.uuid}`}
            </Typography>
            <Typography
              onClick={handleCopyClick}
              sx={{
                maxWidth: "50px",
                maxHeight: "25px",
                borderRadius: "4px",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "12px",
                background: "#fff",
              }}
            >
              Copy
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default ShareSocial;
