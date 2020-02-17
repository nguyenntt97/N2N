import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import { upperFirst } from "../common/utils";
import { Link } from "react-router-dom";

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300]
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12)
    }
  }
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function CustomizedBreadcrumbs(props) {
  let arr = [
    <Link key="1" to="/">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          key="home"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
      </Breadcrumbs>
    </Link>
  ];
  arr = [
    ...arr,
    ...props.curUrl.map((level, index) => {
      let current1 = upperFirst(level);
      return (
        <Link key="2" to={"/"}>
          <StyledBreadcrumb
            key={index}
            href={"/" + current1}
            label={current1}
            // onClick={handleClick}
          />
        </Link>
      );
    })
  ];

  return (
    <Breadcrumbs aria-label="breadcrumb" gutterBottom>
      {arr}
    </Breadcrumbs>
  );
}
