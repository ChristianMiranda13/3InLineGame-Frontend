export interface IGameCreateClasses {
  classes: {
    activeTableRow: string;
    parentContainer: string;
    parentContainer2: string;
    button: string;
  };
}

export const styles = {
  activeTableRow: {
    color: 'white',
    background: '#1e88e5',
  },
  parentContainer: {
    maxWidth: '300px',
  },
  parentContainer2: {
    maxWidth: '1280px',
    margin: '50px auto',
    justifyContent: 'center',
  },
  button: {
    maxWidth: '200px',
    margin: '50px auto',
    justifyContent: 'center',
  },
};
