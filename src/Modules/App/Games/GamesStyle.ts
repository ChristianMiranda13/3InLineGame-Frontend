interface IGamesClasses {
  classes: {
    gamesTable: string;
    clickHoverRow: string;
  };
}

const styles = {
  gamesTable: {
    width: '1400px',
    margin: '50px auto',
  },
  clickHoverRow: {
    'cursor': 'pointer',
    '&:hover': {
      background: '#e4e4e4',
    },
  },
};

export {
  IGamesClasses,
  styles,
};
