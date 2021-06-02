import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import GridContainer from '../../GridContainer';

const useStyles = makeStyles(theme => ({
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mbSpace: {
    marginBottom: 16,
  },
}));

const CurrencyCalculationDetails = ({ onCalculate, onReset, currencies, calculatedValue }) => {
  const { amountToConvert, rate, value, convertFrom, convertTo } = calculatedValue;
  const classes = useStyles();

  const [from, setFrom] = useState(convertFrom);
  const [to, setTo] = useState(convertTo);
  const [amount, setAmount] = useState(amountToConvert);

  useEffect(() => {
    onCalculate(to, from, amount);
  }, []);

  const onConvert = () => {
    onCalculate(to, from, amount);
  };

  const onResetCalculator = () => {
    onReset();
    setAmount(0);
  };

  return (
    <Box>
      <Box>
        <Box component="p" mb={4} fontSize={12} color="text.primary">{`${amountToConvert} ${convertFrom.name} equals`}</Box>
        <Typography component="div" variant="h1" className={clsx(classes.textPrimary, classes.mbSpace)}>
          {value + ' ' + convertTo.name}
        </Typography>
        <Box component="p" fontSize={12} display="flex" alignItems="center" color="text.secondary" mb={6}>
          <Box component="span" mr={2}>
            {`@ 1 ${convertFrom.name}`} ={' '}
            <Box component="span" className={classes.textPrimary}>{`${rate} ${convertTo.name}`}</Box>
          </Box>
        </Box>
      </Box>

      <Box pb={{ xs: 6, md: 10, xl: 16 }}>
        <GridContainer>
          <Grid item xs={12} sm={4}>
            <FormControl style={{ width: '100%' }} variant="outlined">
              <InputLabel>From</InputLabel>
              <Select
                label="From"
                value={from}
                onChange={event => setFrom(event.target.value)}
                inputProps={{
                  name: 'from',
                  id: 'demo-controlled-open-select',
                }}>
                {currencies.map((currency, index) => (
                  <MenuItem key={index} value={currency}>
                    {currency.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl style={{ width: '100%' }} variant="outlined">
              <InputLabel>To</InputLabel>
              <Select
                label="To"
                value={to}
                onChange={event => setTo(event.target.value)}
                inputProps={{
                  name: 'to',
                  id: 'demo-controlled-open-select-to',
                }}>
                {currencies.map((currency, index) => (
                  <MenuItem key={index} value={currency}>
                    {currency.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              label="Amount"
              margin="normal"
              type="number"
              fullWidth
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </Grid>
        </GridContainer>
      </Box>

      <Box display="flex" alignItems="center">
        <Button variant="contained" color="primary" onClick={onConvert}>
          Calculate
        </Button>
        <Box ml={3}>
          <Button variant="outlined" onClick={onResetCalculator}>
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrencyCalculationDetails;
