import { Router } from 'express';
import * as profileController from '@controllers/profile.controllers';
import { authentication } from '@src/middlewares/auth.middleware';
import upload from '@src/middlewares/uploadFile';

const ProfileRouter = Router();
/**
 * @Route GET api/profile
 * @Desc Get user profile
 */
ProfileRouter.get('/', authentication, profileController.getProfile);

/**
 * @Route PUT api/profile
 * @Desc Update user profile
 */
ProfileRouter.put(
  '/',
  authentication,
  upload.single('avatarUrl'),
  profileController.updateProfile
);

export default ProfileRouter;
