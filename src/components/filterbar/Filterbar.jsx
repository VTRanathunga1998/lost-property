import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import FilterListIcon from "@mui/icons-material/FilterList";

// MUI Dialog
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions, DialogTitle } from "@mui/material";
import CategoryModal from "./CategoryModal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Filterbar = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openLocationModal, setOpenLocationModal] = useState(false);

  const openModal = (modalType) => {
    switch (modalType) {
      case "category":
        setOpenCategoryModal(true);
        break;
      case "location":
        setOpenLocationModal(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (modalType) => {
    switch (modalType) {
      case "category":
        setOpenCategoryModal(false);
        break;
      case "location":
        setOpenLocationModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center justify-around w-full md:w-2/3 mx-auto p-4">
      <button
        onClick={() => openModal("category")}
        className="flex items-center justify-center gap-1 p-2 hover:bg-slate-200 rounded-full"
      >
        <CategoryIcon />
        <span>Category</span>
      </button>
      <button
        onClick={() => openModal("location")}
        className="flex items-center justify-center gap-1 p-2 hover:bg-slate-200 rounded-full"
      >
        <PlaceIcon />
        <span>Location</span>
      </button>

      <button className="md:hidden flex items-center justify-center gap-1 p-2 hover:bg-slate-200 rounded-full">
        <FilterListIcon />
        <span>Filters</span>
      </button>

      <Dialog
        open={openCategoryModal}
        onClose={() => closeModal("category")}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select by category
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => closeModal("category")}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <CategoryModal />
        </DialogContent>
        <DialogActions>
          <button
            className="py-2 px-4 text-white bg-red-600 hover:shadow-lg rounded-md"
            onClick={() => closeModal("category")}
          >
            CLOSE
          </button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openLocationModal}
        onClose={() => closeModal("location")}
        fullWidth={true}
      ></Dialog>
    </div>
  );
};

export default Filterbar;
