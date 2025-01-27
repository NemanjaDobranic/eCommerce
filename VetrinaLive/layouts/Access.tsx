import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Logo from '../assets/images/logo.svg';
import Facebook from '../assets/images/facebook.svg';
import Google from '../assets/images/google.svg';
import Headphones from '../assets/images/headphones.svg';
import {facebookSignupUrl, googleSignupUrl} from '../assets/urls';
import {colors, spacing} from '../theme/main';
import Divider from '../components/Divider';
import Button from '../components/Button';
import textVariants from '../theme/textVariants';
import {NavigationProp} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

interface Props {
  header: string;
  content: string;
  link: string;
  screen: string;
  children: React.ReactElement;
  navigation: NavigationProp<any, any>;
}

const Access: React.FC<Props> = ({
  children,
  link,
  screen,
  navigation,
  header,
  content,
}) => {
  const navigateToFacebook = () => {
    Linking.openURL(facebookSignupUrl);
  };

  const navigateToGoogle = () => {
    Linking.openURL(googleSignupUrl);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.root}>
        <Logo style={styles.logo} />
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.content}>{content}</Text>
        {children}
        <Divider content={'OR'} marginVertical={spacing.l} />
        <Button
          style={styles.facebookBtn}
          onPress={navigateToFacebook}
          borderColor={colors.primary.default}
          borderRadius={spacing.s / 2}
          textVariant={textVariants.button.large}
          textColor={colors.primary.black}
          icon={<Facebook />}
          gap={1.25 * spacing.m}>
          Sign up with Facebook
        </Button>
        <Button
          onPress={navigateToGoogle}
          borderColor={colors.primary.default}
          borderRadius={spacing.s / 2}
          textVariant={textVariants.button.large}
          textColor={colors.primary.black}
          icon={<Google />}
          gap={1.25 * spacing.m}>
          Sign up with Google
        </Button>
        <View style={styles.container}>
          {screen === 'SignUp' && (
            <TouchableOpacity
              onPress={() => navigation.navigate('RecoverPassword')}>
              <Text style={{...styles.footer, ...styles.password}}>
                Did you forget your password?
              </Text>
            </TouchableOpacity>
          )}
          <Text style={styles.footer}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(screen)}>
            <Text style={{...styles.footer, color: colors.primary.default}}>
              {link}
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          style={styles.support}
          borderColor={colors.green.primary}
          borderRadius={1.25 * spacing.l}
          textVariant={textVariants.button.large}
          textColor={colors.primary.black}
          icon={<Headphones />}
          gap={1.25 * spacing.s}>
          Support
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    margin: 0,
  },
  root: {
    padding: spacing.m,
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0.05 * height,
    marginBottom: 2 * spacing.m,
  },
  header: {
    fontFamily: 'NotoSansHK-Medium',
    fontSize: 3.5 * spacing.s,
    textAlign: 'center',
    lineHeight: 4 * spacing.s,
    color: colors.primary.black,
    marginBottom: spacing.s,
  },
  content: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 2.25 * spacing.s,
    textAlign: 'center',
    lineHeight: 3 * spacing.s,
    color: colors.grey[500],
    marginBottom: 2 * spacing.m,
  },
  facebookBtn: {
    marginBottom: spacing.l,
  },
  container: {
    flexWrap: 'wrap',
    marginVertical: 4 * spacing.s,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    fontFamily: 'SourceSansPro-Regular',
    color: colors.primary.black,
    fontSize: 1.125 * spacing.m,
    lineHeight: spacing.l,
    textAlign: 'center',
    marginRight: spacing.s / 2,
  },
  support: {
    width: 0.36 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  password: {
    marginBottom: spacing.l,
  },
});

export default Access;
