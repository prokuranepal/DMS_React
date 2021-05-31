import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { fetchError } from '../../../store/actions/Common';
import PageLoader from '../PageComponents/PageLoader';

const ContentLoader = () => {
  const { error, loading, message } = useSelector(({ commonData }) => commonData);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchError(''));
    }, 3000);
  }, [dispatch, error, message]);

  return (
    <React.Fragment>
      {loading && <PageLoader />}
      {error && <Snackbar open={Boolean(error)} message={error} />}
      {message && <Snackbar open={Boolean(error)} message={message} />}
    </React.Fragment>
  );
};

export default ContentLoader;
