import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "@/store/hooks";
import { IconPower } from "@tabler/icons-react";
import { AppState } from "@/store/store";
import Link from "next/link";
import { signOut } from "next-auth/react";

export const Profile = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const hideMenu = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${"secondary.light"}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar
            alt="Remy Sharp"
            src={"/images/profile/user-1.jpg"}
            sx={{ height: 40, width: 40 }}
          />

          <Box>
            <Typography variant="h6">Amol</Typography>
            <Typography variant="caption">Designer</Typography>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                color="primary"
                // component={Link}
                // href="/admin"
                aria-label="logout"
                size="small"
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/admin" })
                }
              >
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ""
      )}
    </Box>
  );
};
